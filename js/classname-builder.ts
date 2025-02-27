function classNameBuilder(defaultClass: string, classList?: object) {
  const classes = Object.fromEntries(Object.entries(classList).filter(([_, value]) => value !== undefined))

  if (Object.keys(classes).length === 0) return defaultClass

  const keys = Object.keys(classes)
  const values = Object.values(classes)

  const classesArray = keys.map((key, index) => {
    return `${key}-${values[index]}`
  })

  return `${defaultClass} ${classesArray.join(" ")}`
}

export { classNameBuilder }
