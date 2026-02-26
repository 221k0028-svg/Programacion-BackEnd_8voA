<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Us - Evaluación Final</title>
    <link rel="stylesheet" href="   CSS/style.css">
    <link href="https://fonts.googleapis.com/css2?family=Karla:wght@400;700&display=swap" rel="stylesheet">
</head>
<body>
<?php if (isset($_GET['enviado'])): ?>
    <div id="success-alert" class="success-banner">
        <div class="success-header">
            <img src="https://img.icons8.com/ios-filled/50/ffffff/ok--v1.png" alt="check" width="20">
            <span>Message Sent!</span>
        </div>
        <p>Thanks for completing the form. We'll be in touch soon!</p>
    </div>
<?php endif; ?>

    <main class="container">
        <form id="contact-form" class="form-card" action="procesar.php" method="POST" novalidate>
            <h1>Contact Us</h1>

            <div class="grid-row">
                <div class="input-group">
                    <label for="firstName">First Name <span class="asterisk">*</span></label>
                    <input type="text" id="firstName" name="nombre">
                    <p class="error-message hidden">This field is required</p>
                </div>
                <div class="input-group">
                    <label for="lastName">Last Name <span class="asterisk">*</span></label>
                    <input type="text" id="lastName" name="apellido">
                    <p class="error-message hidden">This field is required</p>
                </div>
            </div>

            <div class="input-group">
                <label for="email">Email Address <span class="asterisk">*</span></label>
                <input type="email" id="email" name="email" placeholder="email@example.com">
                <p class="error-message hidden">Please enter a valid email address</p>
            </div>

            <div class="input-group">
                <label>Query Type <span class="asterisk">*</span></label>
                <div class="grid-row query-options">
                    <label class="radio-option">
                        <input type="radio" name="query" value="General Enquiry">
                        <span>General Enquiry</span>
                    </label>
                    <label class="radio-option">
                        <input type="radio" name="query" value="Support Request">
                        <span>Support Request</span>
                    </label>
                </div>
                <p class="error-message hidden">Please select a query type</p>
            </div>

            <div class="input-group">
                <label for="message">Message <span class="asterisk">*</span></label>
                <textarea id="message" name="mensaje" rows="5"></textarea>
                <p class="error-message hidden">This field is required</p>
            </div>

            <div class="checkbox-group">
                <div class="check-row">
                    <input type="checkbox" id="consent" name="consentimiento">
                    <label for="consent">I consent to being contacted by the team <span class="asterisk">*</span></label>
                </div>
                <p class="error-message hidden">To submit this form, please consent to being contacted</p>
            </div>

            <button type="submit" class="submit-btn">Submit</button>
            
            <p style="margin-top: 20px; text-align: center;">
                <a href="ver_mensajes.php" style="color: var(--grey-500); font-size: 14px; text-decoration: none;">View all submissions</a>
            </p>
        </form>
    </main>

    <script src="JS/script.js"></script>
</body>
</html>