<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio</title>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" integrity="sha512-tS3S5qG0BlhnQROyJXvNjeEM4UpMXHrQfTGmbQ1gKmelCxlSEBUaxhRBj/EFTzpbP4RVSrpEikbmdJobCvhE3g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" type="text/css" href="assets/css/onepage-scroll.css">
    <link rel="stylesheet" href="assets/css/styles.css">
</head>
<body>

    <?php
        $html = "";
        $jsonFile = 'data.json';

        if (file_exists($jsonFile)) {
            $data = json_decode(file_get_contents($jsonFile), true);
            $data = $data[0];
        } else {
            ?>
                <div class="nocontent_yet">
                    <div class="content">
                        <h1>Coming Soon</h1>
                        <p>The best is yet to come!</p>
                    </div>
                </div>
            <?php
            die;
        }
    ?>

    <div class="main">
        <section class="panel banner">
            <div class="inner-section">
                <div class="content">
                    <img src="assets/img/me.png" alt="Francisco Dagamac Jr" width="200" height="200">
                    <h1><span><?=$data['name']?></span></h1>
                    <h3><?=implode(" | ", $data['title'])?></h3>
                    <ul class="social-links-wrapper">
                        <?php
                            foreach ($data['social_links'] as $social => $link) {
                                ?>
                                <li>
                                    <a href="<?=$link?>" target="_blank" class="<?=$social?>-icon">
                                        <?=$social == "email"?"<i class='fas fa-envelope'></i>":"<i class='fab fa-$social'></i>"?>
                                    </a>
                                </li>
                                <?php
                            }
                        ?>
                    </ul>
                </div>
            </div>
        </section>

        <section class="panel about-me">
            <div class="inner-section">
                <div class="content">
                    <h2 class="section-title">About Me</h2>
                    <div class="two-col">
                        <div class="left">
                            <p><strong>Fullname</strong><span><?=$data['name']?></span></p>
                            <p><strong>Phone</strong><span><a href="tel:<?=$data['phone']?>"><?=$data['phone']?></a></span></p>
                            <p><strong>Email</strong><span><a href="mailto:<?=$data['email']?>"><?=$data['email']?></a></span></p>
                            <p><strong>Address</strong><span><?=implode(", ", $data['address'])?></span></p>
                        </div>

                        <div class="right">
                            <p><?=$data['bio']?></p>
                            <ul class="social-links-wrapper">
                                <?php
                                    foreach ($data['social_links'] as $social => $link) {
                                        ?>
                                        <li>
                                            <a href="<?=$link?>" target="_blank" class="<?=$social?>-icon">
                                                <?=$social == "email"?"<i class='fas fa-envelope'></i>":"<i class='fab fa-$social'></i>"?>
                                            </a>
                                        </li>
                                        <?php
                                    }
                                ?>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="panel work-experience">
            <div class="inner-section">
                <div class="content">
                    <h2 class="section-title"><span>Work Experience</span></h2>
                    <div class="column-center">
                        <?php
                            foreach ($data["experience"] as $company => $details) {
                                ?>
                                <div class="column-center__content">
                                    <div>
                                        <h4><?=$details['role']?></h4>
                                        <small><?=$company?> - <?=$details['year']?></small>
                                        <p><?=$details['description']?></p>
                                        <span class="absoluteicon"><i class="fas fa-briefcase"></i></span>
                                    </div>
                                </div>
                                <?php
                            }
                        ?>
                    </div>
                </div>
            </div>
        </section>

        <section class="panel my-services">
            <div class="inner-section">
                <div class="content">
                    <h2 class="section-title">My Services</h2>
                    <div class="columns">
                        <?php
                            foreach ($data['services'] as $skill => $details) {
                                ?>
                                <div class="item">
                                    <div class="svg-wrapper">
                                        <?php
                                            if ($details['icon'] == 'wordpress') {
                                                echo "<i class='fab fa-wordpress'></i>";
                                            } else {
                                                echo "<span class='material-icons icon'>$details[icon]</span>";
                                            }
                                        ?>
                                    </div>
                                    <h4><?=$skill?></h4>
                                    <p><?=$details['description']?></p>
                                </div>
                                <?php
                            }
                        ?>
                    </div>
                </div>
            </div>
        </section>

        <section class="panel skills">
            <div class="inner-section">
                <div class="content">
                    <h2 class="section-title">Skills</h2>
                    <div class="container">
                        <?php
                            foreach ($data['skills'] as $language => $percent) {
                                ?>
                                <div class="item">
                                    <div class="circle-progress">
                                        <svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="60" cy="60" r="54" stroke="#161616" stroke-width="12" fill="none"/>
                                            <circle cx="60" cy="60" r="54" stroke="#FF9000" stroke-width="12" fill="none" stroke-dasharray="339.292" stroke-dashoffset="16.964" transform="rotate(-90 60 60)"/>
                                        </svg>
                                        <span class="progress-text"><?=$language?><br><?=$percent?></span>
                                    </div>
                                </div>
                                <?php
                            }
                        ?>
                    </div>
                </div>
            </div>
        </section>
        
        <section class="panel work">
            <div class="inner-section">
                <div class="content">
                    <h2 class="section-title">Work</h2>
                    <div class="container owl-carousel owl-theme">
                        <?php
                            foreach ($data['work'] as $company => $details) {
                                ?>
                                <div class="item">
                                    <img src="assets/img/<?=$details['image']?>" alt="<?=$company?>">
                                    <div class="hovered-content">
                                        <div>
                                            <h4><a href="<?=$details['link']?>" target="_blank"><?=$company?></a></h4>
                                            <small><?=$details['platform']?></small>
                                        </div>
                                    </div>
                                </div>
                                <?php
                            }
                        ?>
                    </div>
                </div>
            </div>
        </section>

        <section class="panel contact">
            <div class="inner-section">
                <div class="content">
                    <h2 class="section-title">Hire Me!</h2>
                    <p>Feel free to get in touch by clicking the buttons below. I am here to help you with all your web development needs.</p>
                    <ul class="social-links-wrapper">
                        <?php
                            foreach ($data['social_links'] as $social => $link) {
                                ?>
                                <li>
                                    <a href="<?=$link?>" target="_blank" class="<?=$social?>-icon">
                                        <?=$social == "email"?"<i class='fas fa-envelope'></i>":"<i class='fab fa-$social'></i>"?>
                                    </a>
                                </li>
                                <?php
                            }
                        ?>
                    </ul>
                </div>
            </div>
        </section>
    </div>


    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js" integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js" integrity="sha512-bPs7Ae6pVvhOSiIcyUClR7/q2OAsRiovw4vAkX+zJbw3ShAeeqezq50RIIcIURq7Oa20rW2n2q+fyXBNcU9lrw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="assets/js/onepage-scroll.min.js"></script>
    <script src="assets/js/script.js"></script>
</body>
</html>