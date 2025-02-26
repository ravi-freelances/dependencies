function classNameBuilder(defaultClass: string, classList?: object) {
  if (!classList) return defaultClass

  const classes = Object.fromEntries(Object.entries(classList).filter(([_, value]) => value !== undefined))

  const keys = Object.keys(classes)
  const values = Object.values(classes)

  const classesArray = keys.map((key, index) => {
    return `${key}-${values[index]}`
  })

  return `${defaultClass}${classesArray.join(" ")}`
}

export { classNameBuilder }
