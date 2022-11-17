export const truncateAddress = (addr, front = 4, end = -4) =>
  addr.slice(0, front) + '...' + addr.slice(end)
