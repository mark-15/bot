export const perform = (db, options) => {
  if (options.exit) {
    console.info('Database disconnected')
    db.close()

    process.exit()
  }
}
