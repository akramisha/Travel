document.addEventListener("DOMContentLoaded", () => {
  // Theme Toggle
  const themeToggle = document.getElementById("theme-toggle-checkbox")
  const htmlElement = document.documentElement

  // Check if user has a theme preference stored
  const savedTheme = localStorage.getItem("theme")
  if (savedTheme) {
    htmlElement.className = savedTheme
    themeToggle.checked = savedTheme === "dark"
  } else {
    // Check user's system preference
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    htmlElement.className = prefersDark ? "dark" : ""
    themeToggle.checked = prefersDark
  }

  themeToggle.addEventListener("change", function () {
    if (this.checked) {
      htmlElement.className = "dark"
      localStorage.setItem("theme", "dark")
    } else {
      htmlElement.className = ""
      localStorage.setItem("theme", "")
    }
  })

  // Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn")
  const mobileMenu = document.querySelector(".mobile-menu")

  mobileMenuBtn.addEventListener("click", function () {
    mobileMenu.classList.toggle("active")

    // Animate hamburger to X
    const spans = this.querySelectorAll("span")
    if (mobileMenu.classList.contains("active")) {
      spans[0].style.transform = "rotate(45deg) translate(5px, 5px)"
      spans[1].style.opacity = "0"
      spans[2].style.transform = "rotate(-45deg) translate(7px, -6px)"
    } else {
      spans[0].style.transform = "none"
      spans[1].style.opacity = "1"
      spans[2].style.transform = "none"
    }
  })

  // Close mobile menu when clicking outside
  document.addEventListener("click", (event) => {
    if (!mobileMenuBtn.contains(event.target) && !mobileMenu.contains(event.target)) {
      if (mobileMenu.classList.contains("active")) {
        mobileMenu.classList.remove("active")
        const spans = mobileMenuBtn.querySelectorAll("span")
        spans[0].style.transform = "none"
        spans[1].style.opacity = "1"
        spans[2].style.transform = "none"
      }
    }
  })

  // Menu Category Filter
  const categoryBtns = document.querySelectorAll(".category-btn")
  const menuItems = document.querySelectorAll(".menu-item")

  categoryBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      // Remove active class from all buttons
      categoryBtns.forEach((btn) => btn.classList.remove("active"))

      // Add active class to clicked button
      this.classList.add("active")

      const category = this.getAttribute("data-category")

      // Show all items if 'all' category is selected
      if (category === "all") {
        menuItems.forEach((item) => {
          item.style.display = "block"
        })
      } else {
        // Show items of selected category and hide others
        menuItems.forEach((item) => {
          if (item.getAttribute("data-category") === category) {
            item.style.display = "block"
          } else {
            item.style.display = "none"
          }
        })
      }
    })
  })

  // Testimonial Slider
  const testimonials = document.querySelectorAll(".testimonial")
  const dots = document.querySelectorAll(".dot")
  let currentTestimonial = 0

  function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
      testimonial.style.transform = `translateX(${100 * (i - index)}%)`
    })

    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index)
    })
  }

  // Initialize testimonial slider
  showTestimonial(currentTestimonial)

  // Add click event to dots
  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      currentTestimonial = i
      showTestimonial(currentTestimonial)
    })
  })

  // Auto slide testimonials
  setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length
    showTestimonial(currentTestimonial)
  }, 5000)

  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll("header a, .mobile-menu a, .footer-links a")

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href")

      if (href.startsWith("#")) {
        e.preventDefault()

        const targetId = href
        const targetElement = document.querySelector(targetId)

        if (targetElement) {
          // Close mobile menu if open
          if (mobileMenu.classList.contains("active")) {
            mobileMenu.classList.remove("active")
            const spans = mobileMenuBtn.querySelectorAll("span")
            spans[0].style.transform = "none"
            spans[1].style.opacity = "1"
            spans[2].style.transform = "none"
          }

          // Scroll to target
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: "smooth",
          })

          // Update active link
          navLinks.forEach((link) => link.classList.remove("active"))
          this.classList.add("active")
        }
      }
    })
  })

  // Add to cart animation
  const addToCartBtns = document.querySelectorAll(".add-to-cart")

  addToCartBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      this.innerHTML = '<i class="fas fa-check"></i>'
      setTimeout(() => {
        this.innerHTML = '<i class="fas fa-plus"></i>'
      }, 1500)
    })
  })

  // Scroll reveal animation
  const revealElements = document.querySelectorAll(
    ".section-header, .menu-item, .special-offer, .testimonial, .about-content, .contact-content",
  )

  function checkScroll() {
    revealElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top
      const windowHeight = window.innerHeight

      if (elementTop < windowHeight - 100) {
        element.style.opacity = "1"
        element.style.transform = "translateY(0)"
      }
    })
  }

  // Set initial styles for animation
  revealElements.forEach((element) => {
    element.style.opacity = "0"
    element.style.transform = "translateY(50px)"
    element.style.transition = "opacity 0.5s ease, transform 0.5s ease"
  })

  // Check on load
  checkScroll()

  // Check on scroll
  window.addEventListener("scroll", checkScroll)
})

// Add this code at the end of your existing script.js file or replace it if it already has mobile menu functionality

// Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn")
  const mobileMenu = document.querySelector(".mobile-menu")

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", function () {
      mobileMenu.classList.toggle("active")

      // Animate hamburger to X
      const spans = this.querySelectorAll("span")
      if (mobileMenu.classList.contains("active")) {
        spans[0].style.transform = "rotate(45deg) translate(5px, 5px)"
        spans[1].style.opacity = "0"
        spans[2].style.transform = "rotate(-45deg) translate(7px, -6px)"
      } else {
        spans[0].style.transform = "none"
        spans[1].style.opacity = "1"
        spans[2].style.transform = "none"
      }
    })

    // Close mobile menu when clicking on a link
    const mobileMenuLinks = mobileMenu.querySelectorAll("a")
    mobileMenuLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("active")

        // Reset hamburger icon
        const spans = mobileMenuBtn.querySelectorAll("span")
        spans[0].style.transform = "none"
        spans[1].style.opacity = "1"
        spans[2].style.transform = "none"
      })
    })
  }

  // Close mobile menu when clicking outside
  document.addEventListener("click", (event) => {
    if (
      !mobileMenuBtn.contains(event.target) &&
      !mobileMenu.contains(event.target) &&
      mobileMenu.classList.contains("active")
    ) {
      mobileMenu.classList.remove("active")

      // Reset hamburger icon
      const spans = mobileMenuBtn.querySelectorAll("span")
      spans[0].style.transform = "none"
      spans[1].style.opacity = "1"
      spans[2].style.transform = "none"
    }
  })
})

document.addEventListener("DOMContentLoaded", () => {
  // Header scroll effect
  const header = document.querySelector(".header")
  const backToTop = document.querySelector(".back-to-top")

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled")
      backToTop.classList.add("active")
    } else {
      header.classList.remove("scrolled")
      backToTop.classList.remove("active")
    }
  })

  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn")
  const mobileMenu = document.querySelector(".mobile-menu")

  mobileMenuBtn.addEventListener("click", function () {
    mobileMenu.classList.toggle("active")

    // Animate hamburger to X
    const spans = this.querySelectorAll("span")
    if (mobileMenu.classList.contains("active")) {
      spans[0].style.transform = "rotate(45deg) translate(5px, 5px)"
      spans[1].style.opacity = "0"
      spans[2].style.transform = "rotate(-45deg) translate(7px, -6px)"
    } else {
      spans[0].style.transform = "none"
      spans[1].style.opacity = "1"
      spans[2].style.transform = "none"
    }
  })

  // Close mobile menu when clicking on a link
  const mobileLinks = document.querySelectorAll(".mobile-nav-link")
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active")

      // Reset hamburger icon
      const spans = mobileMenuBtn.querySelectorAll("span")
      spans[0].style.transform = "none"
      spans[1].style.opacity = "1"
      spans[2].style.transform = "none"
    })
  })

  // Theme toggle
  const themeToggle = document.querySelector(".theme-toggle")

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme")

    // Save theme preference to localStorage
    if (document.body.classList.contains("dark-theme")) {
      localStorage.setItem("theme", "dark")
    } else {
      localStorage.setItem("theme", "light")
    }
  })

  // Check for saved theme preference
  const savedTheme = localStorage.getItem("theme")
  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme")
  }

  // Destination filters
  const filterBtns = document.querySelectorAll(".filter-btn")
  const destinationCards = document.querySelectorAll(".destination-card")

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      // Remove active class from all buttons
      filterBtns.forEach((btn) => btn.classList.remove("active"))

      // Add active class to clicked button
      this.classList.add("active")

      const filter = this.getAttribute("data-filter")

      destinationCards.forEach((card) => {
        if (filter === "all" || card.getAttribute("data-category") === filter) {
          card.style.display = "block"
        } else {
          card.style.display = "none"
        }
      })
    })
  })

  // Packages slider
  const packagesSlider = document.querySelector(".packages-slider")
  const packageCards = document.querySelectorAll(".package-card")
  const packageDots = document.querySelectorAll(".packages .dot")
  const packagePrevBtn = document.querySelector(".packages .prev")
  const packageNextBtn = document.querySelector(".packages .next")

  let packageCurrentIndex = 0
  const packageCardWidth = packageCards[0].offsetWidth + 30 // Card width + gap

  function updatePackageSlider() {
    packagesSlider.scrollTo({
      left: packageCurrentIndex * packageCardWidth,
      behavior: "smooth",
    })

    // Update dots
    packageDots.forEach((dot, index) => {
      dot.classList.toggle("active", index === packageCurrentIndex)
    })
  }

  packagePrevBtn.addEventListener("click", () => {
    if (packageCurrentIndex > 0) {
      packageCurrentIndex--
      updatePackageSlider()
    }
  })

  packageNextBtn.addEventListener("click", () => {
    if (packageCurrentIndex < packageCards.length - 1) {
      packageCurrentIndex++
      updatePackageSlider()
    }
  })

  packageDots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      packageCurrentIndex = index
      updatePackageSlider()
    })
  })

  // Testimonials slider
  const testimonialsSlider = document.querySelector(".testimonials-slider")
  const testimonialCards = document.querySelectorAll(".testimonial-card")
  const testimonialDots = document.querySelectorAll(".testimonials .dot")
  const testimonialPrevBtn = document.querySelector(".testimonials .prev")
  const testimonialNextBtn = document.querySelector(".testimonials .next")

  let testimonialCurrentIndex = 0
  const testimonialCardWidth = testimonialCards[0].offsetWidth + 30 // Card width + gap

  function updateTestimonialSlider() {
    testimonialsSlider.scrollTo({
      left: testimonialCurrentIndex * testimonialCardWidth,
      behavior: "smooth",
    })

    // Update dots
    testimonialDots.forEach((dot, index) => {
      dot.classList.toggle("active", index === testimonialCurrentIndex)
    })
  }

  testimonialPrevBtn.addEventListener("click", () => {
    if (testimonialCurrentIndex > 0) {
      testimonialCurrentIndex--
      updateTestimonialSlider()
    }
  })

  testimonialNextBtn.addEventListener("click", () => {
    if (testimonialCurrentIndex < testimonialCards.length - 1) {
      testimonialCurrentIndex++
      updateTestimonialSlider()
    }
  })

  testimonialDots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      testimonialCurrentIndex = index
      updateTestimonialSlider()
    })
  })

  // Gallery lightbox
  const galleryItems = document.querySelectorAll(".gallery-item")

  galleryItems.forEach((item) => {
    const expandIcon = item.querySelector(".gallery-icon")

    expandIcon.addEventListener("click", (e) => {
      e.preventDefault()

      // Create lightbox
      const lightbox = document.createElement("div")
      lightbox.className = "lightbox"

      const img = item.querySelector("img").cloneNode()
      img.className = "lightbox-img"

      const closeBtn = document.createElement("span")
      closeBtn.className = "lightbox-close"
      closeBtn.innerHTML = "&times;"

      lightbox.appendChild(img)
      lightbox.appendChild(closeBtn)
      document.body.appendChild(lightbox)

      // Add lightbox styles
      lightbox.style.position = "fixed"
      lightbox.style.top = "0"
      lightbox.style.left = "0"
      lightbox.style.width = "100%"
      lightbox.style.height = "100%"
      lightbox.style.backgroundColor = "rgba(0, 0, 0, 0.9)"
      lightbox.style.display = "flex"
      lightbox.style.alignItems = "center"
      lightbox.style.justifyContent = "center"
      lightbox.style.zIndex = "9999"

      img.style.maxWidth = "90%"
      img.style.maxHeight = "90%"
      img.style.objectFit = "contain"

      closeBtn.style.position = "absolute"
      closeBtn.style.top = "20px"
      closeBtn.style.right = "30px"
      closeBtn.style.color = "white"
      closeBtn.style.fontSize = "40px"
      closeBtn.style.cursor = "pointer"

      // Close lightbox
      closeBtn.addEventListener("click", () => {
        document.body.removeChild(lightbox)
      })

      lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
          document.body.removeChild(lightbox)
        }
      })
    })
  })

  // Form validation
  const contactForm = document.querySelector(".contact-form")
  const newsletterForm = document.querySelector(".newsletter-form")

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault()

      // Simple validation
      const inputs = this.querySelectorAll("input, textarea")
      let isValid = true

      inputs.forEach((input) => {
        if (input.hasAttribute("required") && !input.value.trim()) {
          isValid = false
          input.style.borderColor = "red"
        } else {
          input.style.borderColor = ""
        }
      })

      if (isValid) {
        // Show success message
        const successMessage = document.createElement("div")
        successMessage.className = "success-message"
        successMessage.textContent = "Your message has been sent successfully!"
        successMessage.style.backgroundColor = "#4CAF50"
        successMessage.style.color = "white"
        successMessage.style.padding = "15px"
        successMessage.style.borderRadius = "5px"
        successMessage.style.marginTop = "20px"

        this.appendChild(successMessage)

        // Reset form
        this.reset()

        // Remove success message after 3 seconds
        setTimeout(() => {
          this.removeChild(successMessage)
        }, 3000)
      }
    })
  }

  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault()

      const emailInput = this.querySelector('input[type="email"]')

      if (!emailInput.value.trim()) {
        emailInput.style.borderColor = "red"
        return
      }

      // Show success message
      const successMessage = document.createElement("div")
      successMessage.className = "success-message"
      successMessage.textContent = "Thank you for subscribing to our newsletter!"
      successMessage.style.backgroundColor = "#4CAF50"
      successMessage.style.color = "white"
      successMessage.style.padding = "15px"
      successMessage.style.borderRadius = "5px"
      successMessage.style.marginTop = "20px"

      this.parentNode.appendChild(successMessage)

      // Reset form
      this.reset()

      // Remove success message after 3 seconds
      setTimeout(() => {
        this.parentNode.removeChild(successMessage)
      }, 3000)
    })
  }

  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll(".nav-link, .mobile-nav-link")

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href")

      if (targetId.startsWith("#") && targetId !== "#") {
        e.preventDefault()

        const targetElement = document.querySelector(targetId)

        if (targetElement) {
          const headerHeight = header.offsetHeight
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight

          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          })

          // Update active link
          navLinks.forEach((link) => link.classList.remove("active"))
          this.classList.add("active")
        }
      }
    })
  })

  // Back to top button
  backToTop.addEventListener("click", (e) => {
    e.preventDefault()

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  })

  // Datepicker initialization (placeholder for actual implementation)
  const datepicker = document.getElementById("datepicker")
  if (datepicker) {
    datepicker.addEventListener("click", () => {
      alert(
        "Datepicker would open here. In a real implementation, you would use a library like flatpickr or datepicker.js.",
      )
    })
  }

  // Animation on scroll
  const animatedElements = document.querySelectorAll(
    ".feature-card, .destination-card, .package-card, .testimonial-card, .gallery-item, .about-stats, .contact-item",
  )

  function checkScroll() {
    animatedElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top
      const windowHeight = window.innerHeight

      if (elementTop < windowHeight - 100) {
        element.style.opacity = "1"
        element.style.transform = "translateY(0)"
      }
    })
  }

  // Set initial styles for animation
  animatedElements.forEach((element) => {
    element.style.opacity = "0"
    element.style.transform = "translateY(30px)"
    element.style.transition = "opacity 0.5s ease, transform 0.5s ease"
  })

  // Check on load
  checkScroll()

  // Check on scroll
  window.addEventListener("scroll", checkScroll)
})

