function getFilesToBackup(lastBackup, changes) {
  let idBackup = []
  
  changes.forEach( change => {
    if(change[1] > lastBackup) idBackup.push(change[0])
  })

  idBackup = [...new Set(idBackup)].sort((a,b)=> a - b)

  return idBackup
}