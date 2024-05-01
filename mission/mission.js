document.addEventListener('DOMContentLoaded', function() {
    const selectElement = document.getElementById('theme');

    selectElement.addEventListener('change', function() {
        changeTheme(); // Call the changeTheme function when the select option is changed
    });

    function changeTheme() {
        const selectedValue = selectElement.value;

        if (selectedValue === 'dark') {
            document.body.classList.add('dark');
            // Change logo image src to white logo
            document.querySelector('.logo').src = 'byui-logo_white.png';
        } else {
            document.body.classList.remove('dark');
            // Change logo image src to blue logo
            document.querySelector('.logo').src = 'byui.webp';
        }
    }
});
