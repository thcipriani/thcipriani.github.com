#!/usr/bin/python

import urllib2
from urllib import FancyURLopener
import re
from BeautifulSoup import BeautifulSoup

# User-Agent Change ala - http://wolfprojects.altervista.org/changeua.php - see exercise 3
class myOpener(FancyURLopener):
  version = 'Mozilla/5.0 (Windows; U; Windows NT 5.1; it; rv:1.8.1.11) Gecko/20071127 Firefox/2.0.0.11'

myopener = myOpener()

def exercise10_1(file):
  f = open(file, 'rU')
  d = {}
  l = []
  for line in f:
    words = line.split()
    if len(words) == 0 : continue
    if words[0] != 'From' : continue
    try:
      d[words[1]] = d.get(words[1], 0) + 1
    except IndexError:
      print 'no second word'
  for key, value in d.items():
    l.append((value, key))
  x = sorted(l, reverse=True)
  print x[0][1],x[0][0]
  exercise10_2('mbox-short.txt')

def exercise10_2(file):
  f = open(file, 'rU')
  d = {}
  l = []
  for line in f:
    words = line.split()
    if len(words) == 0 : continue
    if words[0] != 'From' : continue
    try:
      t = words[5].split(':')
      try:
        d[t[0]] = d.get(t[0], 0) + 1
      except IndexError:
        print 'no hour'
    except IndexError:
      print 'no time'
  for key, value in d.items():
    l.append((key, value))
  x = sorted(l)
  for i in x:
    print i
  exercise10_3('words.txt')

def exercise10_3(file):

  f = open(file, 'rU')
  d = {}
  l = []
  count = 0
  percentogram = []
  wikiURL = 'http://www.wikipedia.org/wiki/Letter_frequencies'
  wikiPercentOgram = []

  for line in f:
    if len(line) == 0 : continue
    words = line.split()
    for word in words:
      if len(word) == 0 : continue
      char = list(word)
      for i in char:
        count += 1
        d[i] = d.get(i, 0) + 1
  for key, value in d.items():
    l.append((key, value))
  x = sorted(l)
  for i in x:
    hist = float(i[1])
    percent = float(hist/count)*100
    percentogram.append((i[0],'%.3f' % round(percent,3)))
#  print sorted(percentogram)

  wikiPage = myopener.open(wikiURL).read()
  wikiSoup = BeautifulSoup(wikiPage).find("table").findNext("table")
  for row in wikiSoup.findAll("tr"):
    col = row.findAll('td')
    try:
      letter = str(col[0]).strip()
      frequency = str(col[1]).strip()
      t = re.compile(r'<.*?>')
      p = re.compile(r'<.*?>')
      letter = t.sub('', letter)
      frequency = t.sub('', frequency)
      wikiPercentOgram.append((letter, frequency[:-1]))
    except:
      'out of range'
#  print wikiPercentOgram

  # That's right - I'm converting them both back to dictionaries - I know the chapter's about Tuples
  wordDict = {}
  wikiDict = {}
  difDict = {}
  for k, v in percentogram:
    wordDict[k] = v
  
  for k, v in wikiPercentOgram:
    wikiDict[k] = v

  for i in wordDict:
    if i in wikiDict:
      if float(wordDict[i]) != float(wikiDict[i]):
        difDict[i] = float(wordDict[i]) - float(wikiDict[i])
      else:
        difDict[i] = float(wordDict[i])

  for k, v in difDict.items():
    print 'The letter',k,'appears in words.txt',str(v)+'% more/less frequently than it appears in the entirety of the English language'

def main():
  exercise10_1('mbox-short.txt')
  

if __name__ == '__main__':
  main()
