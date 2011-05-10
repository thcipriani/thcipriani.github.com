#!/usr/bin/python

def exercise9_1(file):
  wordKeys = {}
  count = 0
  try:
    f = open(file, 'rU')
    for line in f:
      words = line.split()
      for word in words:
        if word in wordKeys:
          continue
        else:
          wordKeys[word] = count
          count += 1
  except IOError:
    print 'Enter valid file name'
  for key in sorted(wordKeys.keys()):
    print key, wordKeys[key]
  exercise9_2('bronco')

def exercise9_2(string):
  def histogram(s):
    d = dict()
    for c in s:
      d[c] = d.get(c, 0) + 1
    return d
  bronco = histogram(string)
  for letter, count in sorted(bronco.items()):
    print 'The letter',letter,'appears',count,'time(s) in the word \'bronco\''
  exercise9_3('mbox-short.txt')

def exercise9_3(file):
  f = open(file, 'rU')
  d = {}
  for line in f:
    words = line.split()
    if len(words) == 0 : continue
    if words[0] != 'From' : continue
    try:
      d[words[2]] = d.get(words[2], 0) + 1
    except IndexError:
      print 'no third word'
  print d
  exercise9_4('mbox.txt')

def exercise9_4(file):
  f = open(file, 'rU')
  d = {}
  for line in f:
    words = line.split()
    if len(words) == 0 : continue
    if words[0] != 'From' : continue
    try:
      d[words[1]] = d.get(words[1], 0) + 1
    except IndexError:
      print 'no second word'
  x = sorted(d.items(), key=lambda x:x[1], reverse=True)
  print x[0][0],'got',x[0][1],'emails'
  exercise9_5('mbox-short.txt')

def exercise9_5(file):
  f = open(file, 'rU')
  d = {}
  for line in f:
    words = line.split()
    if len(words) == 0 : continue
    if words[0] != 'From' : continue
    try:
      email = words[1]
      domain = email.split('@')
      d[domain[1]] = d.get(domain[1], 0) + 1
    except IndexError:
      print 'no second word'
  print d


def main():
  exercise9_1('words.txt')
  

if __name__ == '__main__':
  main()
