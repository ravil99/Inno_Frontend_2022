<script lang="ts">
    let menu: boolean = false; 
    
    // Remove class properties from navMenu
   
</script>

<main>
    <!-- Navigation element -->
    <nav class="nav bd-container">
        <p class="nav__logo">Welcome to my personal page!</p>

        <div class="{menu === true ? 'nav__menu show-menu' : 'nav__menu'}" 
             id="nav-menu">

            <!-- Can be changed to #each loop nav__link element-->

            <ul class="nav__list">
                <!-- Home-->
                <li class="nav__item">
                    <a href="#home" class="nav__link active-link"
                        on:click="{() => menu = !menu}">
                        <i class='bx bx-home-alt-2 nav___icon' ></i>Home
                    </a>
                </li>

                <!-- Profile-->
                <li class="nav__item">
                    <a href="#profile" class="nav__link"
                        on:click="{() => menu = !menu}">
                        <i class='bx bx-user-circle nav___icon' ></i>Profile
                    </a>
                </li>

                <!-- Hobbies-->
                <li class="nav__item">
                    <a href="#hobbies" class="nav__link"
                        on:click="{() => menu = !menu}">
                        <i class='bx bx-wink-smile'></i>Hobbies
                    </a>
                </li>
            </ul>
        </div>
        
        <div class="nav__toggle" id="nav-toggle" 
            on:click="{() => menu = !menu}">
            <i class='bx bx-grid-alt' ></i>
        </div>

    </nav>

  
</main>
