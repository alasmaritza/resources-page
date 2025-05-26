import { ref } from 'vue'

export function useGet(url) {
  const data = ref(null)

  fetch(url)
    .then((res) => res.json())
    .then((json) => (data.value = json))
    .catch((err) => (console.error(err)))

  return { data }
}