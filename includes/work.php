<section id="work" class="container">
    <div class="work">
        <h2>Work</h2>
        <h6>Here are some things I'm proud to have been a part of:</h6>
        <div class="pop">
            <div class="pop-content"></div>
        </div>
        <ul class="work-list">
            <li class="work-list-item">
                <div class="work-overlay">
                    <a href="#"
                    class="icon-link"
                    data-work-info
                    data-event-category="work"
                    data-event-action="details"
                    data-event-label="workPiece1_meadJohnson">
                        <i class="fa fa-info" id="workPiece1"></i>
                    </a>
                </div>
                <img src="static/img/work/work-1.jpg" alt="">
            </li>
            <li class="work-list-item">
                <div class="work-overlay">
                    <a href="#"
                    class="icon-link"
                    data-work-info
                    data-event-category="work"
                    data-event-action="details"
                    data-event-label="workPiece2_kraftProjectPlay">
                        <i class="fa fa-info" id="workPiece2"></i>
                    </a>
                </div>
                <img src="static/img/work/work-2.jpg" alt="">
            </li>
            <li class="work-list-item">
                <div class="work-overlay">
                    <a href="#"
                    class="icon-link"
                    data-work-info
                    data-event-category="work"
                    data-event-action="details"
                    data-event-label="workPiece3_buildForce">
                        <i class="fa fa-info" id="workPiece3"></i>
                    </a>
                </div>
                <img src="static/img/work/work-3.jpg" alt="">
            </li>
            <li class="work-list-item">
                <div class="work-overlay">
                    <a href="#"
                    class="icon-link"
                    data-work-info
                    data-event-category="work"
                    data-event-action="details"
                    data-event-label="workPiece4_ananCloud">
                        <i class="fa fa-info" id="workPiece4"></i>
                    </a>
                </div>
                <img src="static/img/work/work-4.jpg" alt="">
            </li>
            <li class="work-list-item">
                <div class="work-overlay">
                    <a href="#"
                    class="icon-link"
                    data-work-info
                    data-event-category="work"
                    data-event-action="details"
                    data-event-label="workPiece5_solarSystem">
                        <i class="fa fa-info" id="workPiece5"></i>
                    </a>
                </div>
                <img src="static/img/work/work-5.jpg" alt="">
            </li>
            <li class="work-list-item">
                <div class="work-overlay">
                    <a href="#"
                    class="icon-link"
                    data-work-info
                    data-event-category="work"
                    data-event-action="details"
                    data-event-label="workPiece6_slideJar">
                        <i class="fa fa-info" id="workPiece6"></i>
                    </a>
                </div>
                <img src="static/img/work/work-6.jpg" alt="">
            </li>
        </ul>
    </div>
</section>
<script type="text/template" id="workTemplate">
    <div class="pop-close" data-pop-close>
        <a href="#" class="icon-link">
            <i class="fa fa-times"></i>
        </a>
    </div>
    <div class="work-content clear-fix">
        <div class="work-content-left">
            <img src="<%= img %>">
        </div>
        <div class="work-content-right">
            <h5>
                <% if(link) { %>
                    <a href="<%= link %>"

                   target="_blank"

                   data-event-category="work"

                   data-event-action="link"

                   data-event-label="<%= title %>">
                        <%= title %>
                        <i class="fa fa-link"></i>
                    </a>
                <% } else { %>
                    <%= title %>
                <% } %>
            </h5>
            <p><em>Client:</em> <%= client %></p>
            <p><em>Role:</em> <%= role %></p>
            <p><em>Platform:</em> <%= platform %></p>
            <% _.each(summary, function(summary) { %>
                <p><%= summary %></p>
            <% }); %>
        </div>
    </div>
</script>