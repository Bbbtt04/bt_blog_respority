export default {
  mounted(el: any) {
    const imgSrc = el.src
    el.src = ''

    const observer = new IntersectionObserver(([{ isIntersecting }]) => {
      if (isIntersecting) {
        el.src = imgSrc
        observer.unobserve(el)
      }
    })
    observer.observe(el)
  },
}
