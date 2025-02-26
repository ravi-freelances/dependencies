import type { Locale } from "./types"

async function getLocales() {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/ravi-freelances/portfolio-api/refs/heads/main/locales/pt-BR.json"
    )

    if (!response.ok) {
      throw new Error("Error while getting translations.")
    }

    const data = await response.json()

    return data
  } catch (error) {
    console.error("Error:", error)
  }
}

function getLocalKey(locale: Locale, path: string): string | undefined {
  const keys = path.split(".")

  let result = locale

  for (const key of keys) {
    if (result && typeof result === "object" && key in result) {
      result = result[key] as Locale
    } else {
      return undefined
    }
  }

  return typeof result === "string" ? result : undefined
}

export { getLocales, getLocalKey }
