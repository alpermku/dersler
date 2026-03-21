document.addEventListener('DOMContentLoaded', function () {

  // Sticky header
  var header = document.getElementById('siteHeader');
  if (header) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 60) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // Mobile menu
  var menuToggle = document.getElementById('menuToggle');
  var mainNav = document.getElementById('mainNav');
  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', function () {
      mainNav.classList.toggle('active');
      menuToggle.classList.toggle('active');
    });
    mainNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mainNav.classList.remove('active');
        menuToggle.classList.remove('active');
      });
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href*="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var href = this.getAttribute('href');
      var hashIndex = href.indexOf('#');
      if (hashIndex === -1) return;
      var hash = href.substring(hashIndex);
      var target = document.querySelector(hash);
      if (target) {
        e.preventDefault();
        var headerHeight = header ? header.offsetHeight : 0;
        var top = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  // Intersection Observer for animations
  var animateElements = document.querySelectorAll('.animate-in');
  if (animateElements.length > 0 && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    animateElements.forEach(function (el) {
      observer.observe(el);
    });
  }

  // Scroll to top button
  var scrollTopBtn = document.createElement('button');
  scrollTopBtn.className = 'scroll-top-btn';
  scrollTopBtn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>';
  scrollTopBtn.setAttribute('aria-label', 'Yukarı git');
  document.body.appendChild(scrollTopBtn);

  window.addEventListener('scroll', function () {
    if (window.scrollY > 500) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  });

  scrollTopBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ==============================
  // Search & Filter (All Posts page)
  // ==============================
  var searchInput = document.getElementById('searchInput');
  var allPostsList = document.getElementById('allPostsList');
  var noResults = document.getElementById('noResults');
  var filterPills = document.querySelectorAll('.filter-pill');

  if (searchInput && allPostsList) {
    var allItems = allPostsList.querySelectorAll('.all-post-item');
    var activeFilter = 'all';

    function filterAndSearch() {
      var query = searchInput.value.toLowerCase().trim();
      var visibleCount = 0;

      allItems.forEach(function(item) {
        var matchesFilter = activeFilter === 'all' || item.dataset.course === activeFilter;
        var matchesSearch = !query ||
          item.dataset.title.indexOf(query) !== -1 ||
          item.dataset.excerpt.indexOf(query) !== -1 ||
          (item.querySelector('.api-course') && item.querySelector('.api-course').textContent.toLowerCase().indexOf(query) !== -1);

        if (matchesFilter && matchesSearch) {
          item.classList.remove('hidden');
          visibleCount++;
        } else {
          item.classList.add('hidden');
        }
      });

      if (noResults) {
        noResults.style.display = visibleCount === 0 ? 'block' : 'none';
      }
    }

    searchInput.addEventListener('input', filterAndSearch);

    filterPills.forEach(function(pill) {
      pill.addEventListener('click', function() {
        filterPills.forEach(function(p) { p.classList.remove('active'); });
        this.classList.add('active');
        activeFilter = this.dataset.filter;
        filterAndSearch();
      });
    });

    // Ctrl+K shortcut
    document.addEventListener('keydown', function(e) {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        searchInput.focus();
        searchInput.select();
      }
    });
  }

  // ==============================
  // Table of Contents (Post pages)
  // ==============================
  var tocContainer = document.getElementById('postToc');
  var postContent = document.querySelector('.post-content.prose');

  if (tocContainer && postContent) {
    var headings = postContent.querySelectorAll('h2, h3');

    if (headings.length >= 3) {
      var tocHTML = '<div class="post-toc-title">📑 İçindekiler</div><ol>';

      headings.forEach(function(heading, index) {
        var id = 'heading-' + index;
        heading.id = id;
        var level = heading.tagName.toLowerCase();
        var className = 'toc-' + level;
        tocHTML += '<li class="' + className + '"><a href="#' + id + '">' + heading.textContent + '</a></li>';
      });

      tocHTML += '</ol>';
      tocContainer.innerHTML = tocHTML;
      tocContainer.classList.add('has-items');
    }
  }

});
