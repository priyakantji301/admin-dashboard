$(document).ready(function() {
    // List of roles to simulate a more complex database
    const roles = ['Administrator', 'Security Engineer', 'Developer', 'Project Manager', 'Systems Analyst'];

    // 1. Toast Notification System
    function showToast(msg) {
        const toast = $(`<div class="toast">${msg}</div>`);
        $('#toast-container').append(toast);
        // Fade out and remove after 3 seconds
        setTimeout(() => {
            toast.fadeOut(() => toast.remove());
        }, 3000);
    }

    // 2. Fetch Users Function (AJAX)
    function loadUsers() {
        const $grid = $('#user-grid');
        $grid.html('<div style="color: #F59E0B; padding: 20px;">Synchronizing with secure cloud...</div>');

        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/users',
            method: 'GET',
            success: function(users) {
                $grid.empty();
                $('#user-count').text(users.length);

                users.forEach(user => {
                    // Assign a random role for visual variety
                    const randomRole = roles[Math.floor(Math.random() * roles.length)];
                    
                    const cardHtml = `
                        <div class="user-card">
                            <span class="badge">${randomRole}</span>
                            <h3>${user.name}</h3>
                            <p style="color: #6B7280; font-size: 13px; margin-bottom: 15px;">${user.email}</p>
                            <div class="card-footer">
                                <button class="view-btn btn-primary" style="padding: 8px 12px; font-size: 12px; background:#f3f4f6; color:#000; border:none; border-radius:6px; cursor:pointer;">Quick View</button>
                                <button class="terminate-btn" style="background:#fee2e2; color:#dc2626; border:none; padding:8px 12px; border-radius:6px; margin-left:10px; cursor:pointer;">Remove</button>
                            </div>
                        </div>
                    `;
                    $grid.append(cardHtml);
                });
                showToast("Personnel Directory Synchronized");
            },
            error: function() {
                showToast("Connection Error: API Unreachable");
            }
        });
    }

    // Initial load of users
    loadUsers();

    // 3. Tab Switching Logic
    $('.nav-item').on('click', function(e) {
        e.preventDefault();
        
        // Update Sidebar UI
        $('.nav-item').removeClass('active');
        $(this).addClass('active');

        // Switch Visible Section
        const targetSection = $(this).data('target');
        $('.tab-content').removeClass('active');
        $('#' + targetSection).addClass('active');

        // If clicking back to users, refresh if empty
        if(targetSection === 'users-section' && $('#user-grid').is(':empty')) {
            loadUsers();
        }
    });

    // 4. Quick View Modal Logic (Event Delegation)
    $(document).on('click', '.view-btn', function() {
        const $card = $(this).closest('.user-card');
        const name = $card.find('h3').text();
        const role = $card.find('.badge').text();
        const email = $card.find('p').text();

        // Populate Modal Content
        $('#modal-body').html(`
            <h2 style="margin-top:0; color:#1A1A1A;">${name}</h2>
            <span class="badge" style="display:inline-block; margin-bottom:15px;">${role}</span>
            <p><strong>Email Address:</strong> ${email}</p>
            <p><strong>System Status:</strong> <span style="color:#059669;">Verified Active</span></p>
            <p><strong>Access Level:</strong> Level 4 Protocol</p>
            <p style="font-size:12px; color:#86868b; margin-top:20px;">Internal Record: SEC-ID-${Math.floor(Math.random() * 9000) + 1000}</p>
        `);

        // Show Modal
        $('#user-modal').fadeIn(200);
    });

    // Close Modal Controls
    $('.close-modal').on('click', function() {
        $('#user-modal').fadeOut(200);
    });

    $(window).on('click', function(event) {
        if ($(event.target).is('#user-modal')) {
            $('#user-modal').fadeOut(200);
        }
    });

    // 5. Global Search Filter
    $('#global-search').on('input', function() {
        const query = $(this).val().toLowerCase();
        $('.user-card').each(function() {
            const cardText = $(this).text().toLowerCase();
            $(this).toggle(cardText.includes(query));
        });
    });

    // 6. Terminate Access (Remove Card)
    $(document).on('click', '.terminate-btn', function() {
        const $card = $(this).closest('.user-card');
        const name = $card.find('h3').text();

        if(confirm(`Are you sure you want to revoke access for ${name}?`)) {
            $card.fadeOut(400, function() {
                $(this).remove();
                // Update the counter live
                $('#user-count').text($('.user-card').length);
                showToast(`Access Revoked: ${name}`);
            });
        }
    });

    // Refresh Button Handler
    $('#refresh-data').on('click', function() {
        loadUsers();
    });

    // Simulated Latency Update
    setInterval(() => {
        const ms = Math.floor(Math.random() * (35 - 15 + 1)) + 15;
        $('#latency').text(ms + 'ms');
    }, 5000);
});