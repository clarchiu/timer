let alarms = process.argv
                    .slice(2)

for (let alarm of alarms) {
  if (isNaN(alarm) || alarm < 0) {
    continue;
  }

  setTimeout(() => {
    process.stdout.write('\x07');
  }, alarm * 1000);
}
