#!/usr/bin/python
#author: Tyler Cipriani
#date: 5/4/11

import sys
import os
import re
import urllib2
from urllib import urlretrieve

"""
P2PU Python 101- Chapter 5 plagerism
"""
def bookem(file):
  yourFile = file
  count = 0
  word = []
  yourwords = []
  try:
    f = open(yourFile, 'rU')
    for line in f:
      words = line.split()
      for word in words:
        yourwords.append(word)
  except IOError:
    print 'Enter a valid file'
  pythonFlowControl = "http://docs.python.org/tutorial/controlflow.html"
  pagecontent = urllib2.urlopen(pythonFlowControl)
  for line in pagecontent:
    pageWords = line.split()
    for i in pageWords:
      if i in yourwords:
        print 'You stole the word',i
        count += 1
  print count


def main():
  args = sys.argv[1:]

  if not args:
    print 'usage: python ./plagiarise.py yourfile.py'
    sys.exit(1)
  else:
    bookem(sys.argv[1])

if __name__ == '__main__':
  main()
