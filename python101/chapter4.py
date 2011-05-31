#!/usr/bin/python

"""
P2PU Python 101- Chapter 4 Exercises
"""

import random

def exercise4_1():
  print '\nExercise 4.1'
  for i in range(10):
    x = random.random()
    print x
  exercise4_2()

def exercise4_2(): #exercise 4_2 & 4_3

#  repeat_lyrics() # CAUSES - UnboundLocalError: local variable 'repeat_lyrics' referenced before assignment

  def repeat_lyrics():
    print_lyrics()
    print_lyrics()

#   it's fine to define a function that calls another fuction that hasn't been defined yet
#   caveat: you couldn't call 'repeat_lyrics()' before defining print_lyrics()
#   i.e. I couldn't call repeat_lyrics() here

  def print_lyrics():
    print "I'm a lumberjack, and I'm okay."
    print 'I sleep all night and I work all day.'

  repeat_lyrics()

  exercise4_4()

def exercise4_4():
  print '\nExercise 4.4'
  while True:
    try:
      hours = float(raw_input('Enter Hours: '))
    except:
      print 'Error, Please enter numeric input'
      continue
    try:
      rate = float(raw_input('Enter Rate: '))
      break
    except:
      print 'Error, Please enter numeric input'
      continue

  print 'Pay:','%.2f' % round(hours * rate, 2)
  exercise4_5()

def exercise4_5():
  print '\nExercise 4.5'
  while True:
    try:
      score = float(raw_input('Enter Score: '))
    except ValueError:
      print 'Error, Please enter numeric input'
      continue
    if score > 1 or score < 0:
      print 'Error, Enter a score between 0 and 1'
      continue
    else:
      break
  if score > .9:
    print 'A'
  if score > .8:
    print 'B'
  if score > .7:
    print 'C'
  if score > .6:
    print 'D'
  if score < .6:
    print 'F'


def main():
  exercise4_1()

if __name__ == '__main__':
  main()
