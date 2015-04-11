<section id="work" class="container">
    <div class="work">
        <h2>Work</h2>
        <ul>
            <li class="work-list-item">
                <div class="work-overlay">
                    <a href="#" data-work-info class="icon-link">
                        <i class="fa fa-info" id="workPiece1"></i>
                    </a>
                </div>
                <img src="static/img/work/work-1.jpg" alt="">
            </li>
            <li class="work-list-item">
                <div class="work-overlay">
                    <a href="#" data-work-info class="icon-link">
                        <i class="fa fa-info" id="workPiece2"></i>
                    </a>
                </div>
                <img src="static/img/work/work-2.jpg" alt="">
            </li>
            <li class="work-list-item">
                <div class="work-overlay">
                    <a href="#" data-work-info class="icon-link">
                        <i class="fa fa-info" id="workPiece3"></i>
                    </a>
                </div>
                <img src="static/img/work/work-3.jpg" alt="">
            </li>
            <li class="work-list-item">
                <div class="work-overlay">
                    <a href="#" data-work-info class="icon-link">
                        <i class="fa fa-info" id="workPiece4"></i>
                    </a>
                </div>
                <img src="static/img/work/work-4.jpg" alt="">
            </li>
            <li class="work-list-item">
                <div class="work-overlay">
                    <a href="#" data-work-info class="icon-link">
                        <i class="fa fa-info" id="workPiece5"></i>
                    </a>
                </div>
                <img src="static/img/work/work-5.jpg" alt="">
            </li>
            <li class="work-list-item">
                <div class="work-overlay">
                    <a href="#" data-work-info class="icon-link">
                        <i class="fa fa-info" id="workPiece6"></i>
                    </a>
                </div>
                <img src="static/img/work/work-6.jpg" alt="">
            </li>
        </ul>
    </div>
</section>
<script type="text/template" id="workTemplate">
    <div class="work-content">
        <div class="work-content-left">
            <img src="<%= img %>">
        </div>
        <div class="work-content-right">
            <%= summary %>
        </div>
    </div>
</script>