/** Первая строка содержит день недели (от 1 до 7), часы (от 0 до 23) и минуты (от 0 до 59).
ВТорая строка содержит N до 1000 - количество напоминаний
Следующие N строк содержат описание каждого напоминания - формат даты как в первой строке.

Вывести через пробел день, час, минуту следующей отгрузки зерен в кофейню.

Входные данные :
7 23 59
4
1 0 0
7 23 00
0 1 0
1 1 1 
результат
1 0 0
*/


var readline = require('readline');
 
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


/** var entry = '7 23 59,4,1 0 0,7 23 00,0 1 0,1 1 0' */

var entry= [];

rl.on('line', function (data) {    // line example: "0 0 1 1"
	entry.push(data);
    
});

var data = entry;
rl.on('close', () => { 

	var numOfReminders = data[1];

	var currentTime = data[0];
	var reminders = data.slice(2);
	



currentTime = currentTime.split(' ');
var currentTimeInMins = currentTime[0] * 1440 + currentTime[1] * 60 + Number(currentTime[2]);



var remindersNewArray = [];

reminders.forEach(function(item, i) {

  var reminderInMins = item.split(' ');
  if (reminderInMins[0] == '0') {
    for (let i = 1; i <= 7; i++) { //adding 7 reminders instead of one
      reminderInMins[0] = i;
      remindersNewArray.unshift(Number(reminderInMins[0]) * 1440 + Number(reminderInMins[1]) * 60 + Number(reminderInMins[2]));

    }

  } else {

    remindersNewArray.unshift(Number(reminderInMins[0]) * 1440 + Number(reminderInMins[1]) * 60 + Number(reminderInMins[2]));
  }
})


remindersNewArray.sort((a, b) => a - b);


var nextReminder = 0;

for (let i in remindersNewArray) {
  if (remindersNewArray[i] >= currentTimeInMins) {
    nextReminder = remindersNewArray[i];
    break
  }
}
if (nextReminder == '0') {
  nextReminder = remindersNewArray[0]
}

function getReminderDate(nextReminder) {
	var nextReminderDay = Math.floor(nextReminder / 1440);

  var nextReminderHour = Math.floor((nextReminder - nextReminderDay * 1440) / 60);
  var nextReminderMin = nextReminder - nextReminderDay * 1440 - nextReminderHour * 60;
  return nextReminderDay+' '+nextReminderHour+" "+nextReminderMin
}


var result=getReminderDate(nextReminder);
	
	process.stdout.write(result.toString());
	process.stdout.write('\n');
	process.exit(0); 
	});
