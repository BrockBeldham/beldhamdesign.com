<section id="work" class="container">
    <div class="work">
        <h2>Work</h2>
        <ul>
            <li class="work-list-item" id="workPiece1">
                <div class="work-overlay">
                    <a href="#" data-work-info class="icon-link">
                        <i class="fa fa-info"></i>
                    </a>
                </div>
                <img src="static/img/work/work-1.jpg" alt="">
            </li>
            <li class="work-list-item" id="workPiece2">
                <div class="work-overlay">
                    <a href="#" data-work-info class="icon-link">
                        <i class="fa fa-info"></i>
                    </a>
                </div>
                <img src="static/img/work/work-2.jpg" alt="">
            </li>
            <li class="work-list-item" id="workPiece3">
                <div class="work-overlay">
                    <a href="#" data-work-info class="icon-link">
                        <i class="fa fa-info"></i>
                    </a>
                </div>
                <img src="static/img/work/work-3.jpg" alt="">
            </li>
            <li class="work-list-item" id="workPiece4">
                <div class="work-overlay">
                    <a href="#" data-work-info class="icon-link">
                        <i class="fa fa-info"></i>
                    </a>
                </div>
                <img src="static/img/work/work-4.jpg" alt="">
            </li>
            <li class="work-list-item" id="workPiece5">
                <div class="work-overlay">
                    <a href="#" data-work-info class="icon-link">
                        <i class="fa fa-info"></i>
                    </a>
                </div>
                <img src="static/img/work/work-5.jpg" alt="">
            </li>
            <li class="work-list-item" id="workPiece6">
                <div class="work-overlay">
                    <a href="#" data-work-info class="icon-link">
                        <i class="fa fa-info"></i>
                    </a>
                </div>
                <img src="static/img/work/work-6.jpg" alt="">
            </li>
        </ul>
    </div>
</section>
<script type="text/template" id="workPiece1Content">
    <div class="work-content">
        <div class="work-content-left">
            <img src="<%= work.image %>">
        </div>
        <div class="work-content-right">
        <%= work.content %>
        </div>
    </div>
</script>