export const formatDate = (date: string) => {
    const options: Intl.DateTimeFormatOptions = {
        day: "numeric",
        month: "numeric"
    }

    return new Date(date).toLocaleString("ru", options)
}