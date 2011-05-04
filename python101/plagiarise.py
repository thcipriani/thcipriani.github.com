#!/usr/bin/python
#author: Tyler Cipriani
#date: 5/4/11

import sys
import urllib2

"""
P2PU Python 101- Chapter 5 plagerism
"""
def bookem(file):
  yourFile = file
  count = 0
  word = []
  yourwords = []
  theirwords = []

  #Retrieve the flow control page from the python site and create a list with all words
  pythonFlowControl = "http://docs.python.org/tutorial/controlflow.html"
  pagecontent = urllib2.urlopen(pythonFlowControl)
  for line in pagecontent:
    pageWords = line.split()
    for i in pageWords:
      theirwords.append(i)

  try:
    #open your file and see if each word is in the array you created previously
    f = open(yourFile, 'rU')
    for line in f:
      words = line.split()
      for word in words:
        if word in theirwords:
          print 'You stole',word
          count += 1

  except IOError:
    print 'Enter a valid file'

  print 'IN ALL YOU\'VE STOLEN',count,'WORDS'

def main():
  args = sys.argv[1:]

  if not args:
    print 'usage: python ./plagiarise.py yourfile.py'
    sys.exit(1)
  else:
    bookem(sys.argv[1])

if __name__ == '__main__':
  main()
