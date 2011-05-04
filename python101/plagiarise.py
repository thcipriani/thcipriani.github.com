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
  stolenwords = []

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
          if word in stolenwords:
            continue
          else:
            stolenwords.append(word)

  except IOError:
    print 'Enter a valid file'

  for word in stolenwords:
    print 'The word \''+word+'\' is stolen'
    count += 1
  print 'YOUR SCRIPT CONTAINS',count,'WORDS THAT APPEAR ON http://docs.python.org/tutorial/controlflow.html - SCANDALOUS!'

def main():
  args = sys.argv[1:]

  if not args:
    print 'usage: python ./plagiarise.py yourfile.py'
    sys.exit(1)
  else:
    bookem(sys.argv[1])

if __name__ == '__main__':
  main()



# FOR ALL Y'ALL HATERS - HERE THE RESULTS FROM MY CHAPTER 5 HOMEWORK
# ============================================================================================================+
# The word 'Python' is stolen                                                                                 |
# The word '5' is stolen                                                                                      |
# The word 'print' is stolen                                                                                  |
# The word 'and' is stolen                                                                                    |
# The word 'numbers' is stolen                                                                                |
# The word '=' is stolen                                                                                      |
# The word 'line' is stolen                                                                                   |
# The word 'a' is stolen                                                                                      |
# The word 'if' is stolen                                                                                     |
# The word 'for' is stolen                                                                                    |
# The word 'in' is stolen                                                                                     |
# The word '1' is stolen                                                                                      |
# The word 'except' is stolen                                                                                 |
# The word 'enter' is stolen                                                                                  |
# The word 'is' is stolen                                                                                     |
# The word 'or' is stolen                                                                                     |
# The word '>' is stolen                                                                                      |
# YOUR SCRIPT CONTAINS 17 WORDS THAT APPEAR ON http://docs.python.org/tutorial/controlflow.html - SCANDALOUS! |
