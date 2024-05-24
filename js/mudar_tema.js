document.addEventListener('DOMContentLoaded', function() {
    const navbarItems = document.querySelectorAll('.link a');

    navbarItems.forEach(item => {
        item.addEventListener('click', function(event) {
            // Impedir o comportamento padrão de navegação
            event.preventDefault();

            // Remover a classe 'active' de todos os itens
            navbarItems.forEach(nav => nav.classList.remove('active'));

            // Adicionar a classe 'active' ao item clicado
            this.classList.add('active');

            // Navegar para o href do item clicado
            const target = this.getAttribute('href');
            window.top.location.href = target;
        });
    });

    // Para definir o item ativo com base na URL atual
    const currentPath = window.top.location.pathname.split('/').pop();
    navbarItems.forEach(item => {
        if (item.getAttribute('href') === currentPath) {
            item.classList.add('active');
        }
    });
});
