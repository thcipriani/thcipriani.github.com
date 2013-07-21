#!/usr/bin/python

"""
P2PU Python 101- Chapter 5 Exercises
"""

import sys

def exercise6_1():
  print '\n\nExercise 6.1'
  print '=================================================='
  str = 'X-DSPAM-Confidence: 0.8475'
  halfStr = str[str.find(':') + 1:]
  print float(halfStr)
  exercise6_2()

def exercise6_2():
  print '\n\nExercise 6.2 FUN WITH STRINGS'
  print '=================================================='
  muhName = 'Tyler Cipriani: American Hero'
  print 'The string I will be testing is',muhName
  print '\nCapitalize:',muhName.capitalize() # Capitalize First Letter
  print '\nCenter(100, #):',muhName.center(100, '#') # Center string in a 100 width area surrounded by '#'
  print '\nCount of letter(e):',muhName.count('e') # Counts instances of 'e'
  print '\nEndswith (hero):',muhName.endswith('hero') # False
  print '\nEndswith (Hero):',muhName.endswith('Hero') # True
  muhNameSansColon = muhName.split(': ')[0] + '{0}' + muhName.split(': ')[1]
  print '\nSplit name at \': \' and concatonate with \'{0}\':',muhNameSansColon # Tyler Cipriani{0}American Hero
  print '\nFormat split string with {is an}:',muhNameSansColon.format(' is '+'an ')# Tyler Cipriani is an American Hero
  print '\nReplace the letter \'e\' with the word \'bologna-hole\':',muhName.replace('e',' bologna-hole ')
  print '\nStrip \'Hero\' from my string:',muhName.strip('Hero'),'\n\n' #Tyler Cipriani American
  exercise6_5()

def exercise6_5():
  str = 'X-DSPAM-Confidence: 0.8475'
  slc = float(str[(str.find(': ') + 1):].strip())
  print slc

   


def main():
  exercise6_1()

if __name__ == '__main__':
  main()
