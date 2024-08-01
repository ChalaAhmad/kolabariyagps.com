        document.getElementById('searchInput').addEventListener('input', function() {
            const searchValue = this.value.trim();
            const sections = document.querySelectorAll('.section');
            sections.forEach(section => {
                if (section.id === 'section-' + searchValue) {
                    section.style.display = 'block';
                } else {
                    section.style.display = 'none';
                }
            });
        });