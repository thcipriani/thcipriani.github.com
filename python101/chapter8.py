#!/usr/bin/python

"""
P2PU Python 101- Chapter 8 Exercises
"""

import sys

def exercise8_1(list):
  print '\n\nExercise 8.1'
  print '=================================================='
  def chop(list):
    del list[0], list[-1:]
    print list
  chop(list)
  exercise8_2()

def exercise8_2():
  print '\n\nExercise 8.2'
  print '=================================================='
  #txt that'll break the book's code:
  #From: nobody
  #It'll give an out of range error on the last line 'print words[2]'
  fhand = open('mbox-short.txt')
  count = 0
  for line in fhand:
    words = line.split()
    # print 'Debug:', words
    if len(words) == 0 : continue
    if words[0] != 'From' : continue
    try:
      print words[2]
    except IndexError:
      print 'no third word'
  exercise8_3()

def exercise8_3():
  print '\n\nExercise 8.3'
  print '=================================================='
  #txt that'll break the book's code:
  #From: nobody
  #It'll give an out of range error on the last line 'print words[2]'
  fhand = open('mbox-short.txt')
  count = 0
  for line in fhand:
    words = line.split()
    # print 'Debug:', words
    if len(words) == 0 or words[0] != 'From' : continue
    try:
      print words[2]
    except IndexError:
      print 'no third word'
  exercise8_4('romeo.txt')

def exercise8_4(file):
  print '\n\nExercise 8.4'
  print '=================================================='
  wordList = []
  try:
    f = open(file, 'rU');
    for line in f:
      words = line.split()
      for word in words:
        if word in wordList:
          continue
        else:
          wordList.append(word)
    print sorted(wordList)
  except IOError:
    print 'enter valid file name'
  exercise8_5()

def exercise8_5():
  print '\n\nExercise 8.5'
  print '=================================================='
  f = open('mbox.txt')
  count = 0
  for line in f:
    words = line.split()
    if len(words) == 0 or words[0] != 'From' : continue
    try:
      print words[1]
      count += 1
    except IndexError:
      print 'no third word'
  print 'There were',count,'lines with \'From\' as the first word'
  exercise8_6()

def exercise8_6():
  print '\nExercise 8.6'
  numbers = []
  minum = None
  maxnum = None
  while True:
    line = raw_input('Enter a Number: ')
    if line == 'done':
      print max(numbers),min(numbers)
      break
    else:
      try:
        float(line)
        numbers.append(line)
        continue
      except ValueError:
        print 'ERROR, please enter a number'
        continue

def main():
  args = sys.argv[1:]

  if not args:
    print 'usage: python ./chapter8.py [list of stuff to pass to exercise 8.1]'
    sys.exit(1)

  exercise8_1(args)
  
if __name__ == '__main__':
  main()
