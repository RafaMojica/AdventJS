<h2 align="center">Santa Claus is Scrum Master</h2>

Santa Claus is a little worried because the preparations are taking a long time. He recently obtained a Scrum certification and has decided to use the methodology to organize the work of his team.

They tell you the expected duration of the tasks with a string in the format hh:mm:ssand in the same format how long they have been working on it.

But Santa Claus doesn't know quickly how much or how much time it takes to finish, so he has asked us to make a program that tells us how much of the task has already been completed.

For example, if the task lasts 03:00:00and they have been working 01:00:00then they have already completed 1/3the task. In code:

```sh
getCompleted('01:00:00', '03:00:00') // '1/3'
getCompleted('02:00:00', '04:00:00') // '1/2'
getCompleted('01:00:00', '01:00:00') // '1/1'
getCompleted('00:10:00', '01:00:00') // '1/6'
getCompleted('01:10:10', '03:30:30') // '1/3'
getCompleted('03:30:30', '05:50:50') // '3/5
```

Keep in mind:

- **The time format is `hh:mm:ss`.**
- **The format of the output is a string `a/b` where ais the portion of the task that has already been completed and bis the portion of the task that remains to be completed.**
- **The portion is always shown with the smallest possible fraction. (e.g. it would never be displayed `2/4` because it can be represented as `1/2`).**
- **If the task has already been completed, the fraction would be `1/1`.**
- **No elves have been mistreated during the execution of this challenge nor have they had to use real Scrum.**
README copy 11