<h2 align="center">The 3D boxes</h2>

Santa is experimenting with new gift designs and **he needs your help to visualize them in 3D**.

Your task is to write a function that, given a size n (integer), **generates a drawing of a 3D gift** using ASCII characters.

The lines of the gifts are drawn with # and the faces with the symbol passed to us as a parameter:

```sh
drawGift(4, '+')

/*
   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####
*/
```

```sh
drawGift(5, '*')

/*
    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####
*/
```

```sh
drawGift(1, '^')

/*
#
*/
```

Important: We have been told that **there is always to leave a newline at the end of the drawing**.
