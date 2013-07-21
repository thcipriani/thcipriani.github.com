#!/usr/bin/python

"""
P2PU Python 101- Chapter 7 Exercises
"""

import sys

def exercise7_1():
  print '\nExercise 7.1'
  while True:
    file = raw_input('Enter a filename: ')
    try:
      f = open(file, 'rU')
      break
    except:
      print 'enter a valid filename/filepath\n'
      continue
  for line in f:
    print line.upper()
  exercise7_2()

def exercise7_2():
  print '\nExercise7.2'
  numList = []
  while True:
    file = raw_input('Enter a filename: ')
    try:
      f = open(file, 'rU')
      break
    except:
      print 'enter valid filename/path\n'
      continue
  for line in f:
    words = line.split(' ')
    if len(words[0]) == 0: continue
    if words[0] != 'X-DSPAM-Confidence:': continue
    try:
      numList.append(float(words[1]))
    except:
      print 'didn\'t work\n'
  print 'Average spam confidence: ',sum(numList)/len(numList),'\n'
  exercise7_3()

def exercise7_3():
  print '\nExercise7.3'
  numList = []
  while True:
    file = raw_input('Enter a filename: ')
    if file == 'na na boo boo':
      print '''	
        "...The name of the song is called 'Haddocks' Eyes'!"
          "Oh, that's the name of the song, is it?" Alice said, trying to
        feel interested.
          "No, you don't understand," the Knight said, looking a little
        vexed.  "That's what the name is called.  The name really is, 'The Aged
        Aged Man.'"
          "Then I ought to have said "That's what the song is called'?"
        Alice corrected herself.
          "No, you oughtn't: that's quite another thing!  The song is
        called 'Ways and Means':  but that's only what it is called you know!"
          "Well, what is the song then?" said Alice, who was by this
        time completely bewildered.
          "I was coming to that," the Knight said.  "The song really is
        "A-sitting on a Gate": and the tune's my own invention."
            -- Lewis Carroll, "Through the Looking Glass"
        '''
      sys.exit(1)
    try:
      f = open(file, 'rU')
      break
    except:
      print 'enter valid filename/path'
      continue
  for line in f:
    words = line.split(' ')
    if len(words[0]) == 0: continue
    if words[0] != 'X-DSPAM-Confidence:': continue
    try:
      numList.append(float(words[1]))
    except:
      print 'didn\'t work'
  print 'Average spam confidence: ',sum(numList)/len(numList),'\n'


def main():
  exercise7_1()

if __name__ == '__main__':
  main()
