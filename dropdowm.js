    // Dropdown logic
    const btn = document.getElementById('premiumDropdownBtn');
    const dropdown = document.getElementById('premiumDropdown');
    const icon = document.getElementById('premiumDropdownIcon');
    let open = false;

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      open = !open;
      dropdown.classList.toggle('opacity-0', !open);
      dropdown.classList.toggle('pointer-events-none', !open);
      icon.classList.toggle('rotate-180', open);
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    document.addEventListener('click', (e) => {
      if (open && !btn.contains(e.target) && !dropdown.contains(e.target)) {
        open = false;
        dropdown.classList.add('opacity-0', 'pointer-events-none');
        icon.classList.remove('rotate-180');
        btn.setAttribute('aria-expanded', 'false');
      }
    });