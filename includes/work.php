<section id="work" class="container">
    <div class="work">
        <h2>Work</h2>
        <h3>Here are some things I'm proud to have been a part of:</h3>
        <div class="pop">
            <div class="pop-content"></div>
        </div>
        <ul class="work-list">
            <li class="work-list-item"
            data-work-info
            data-event-category="work"
            data-event-action="details"
            data-event-label="workPiece1_meadJohnson"
            id="workPiece1">
                <div class="work-overlay"></div>
                <div class="work-list-item-cnt">
                    <i class="fa fa-plus"></i>
                    <h4>Mead Johnson</h4>
                    <h5>Developer</h5>
                </div>
                <img src="static/img/work/work-1.jpg" alt="">
            </li>
            <li class="work-list-item"
            data-work-info
            data-event-category="work"
            data-event-action="details"
            data-event-label="workPiece2_kraftProjectPlay"
            id="workPiece2">
                <div class="work-overlay"></div>
                <div class="work-list-item-cnt">
                    <i class="fa fa-plus"></i>
                    <h4>Kraft Project Play</h4>
                    <h5>Developer</h5>
                </div>
                <img src="static/img/work/work-2.jpg" alt="">
            </li>
            <li class="work-list-item"
            data-work-info
            data-event-category="work"
            data-event-action="details"
            data-event-label="workPiece3_buildForce"
            id="workPiece3">
                <div class="work-overlay"></div>
                <div class="work-list-item-cnt">
                    <i class="fa fa-plus"></i>
                    <h4>Build Force</h4>
                    <h5>Developer</h5>
                </div>
                <img src="static/img/work/work-3.jpg" alt="">
            </li>
            <li class="work-list-item"
            data-work-info
            data-event-category="work"
            data-event-action="details"
            data-event-label="workPiece4_ananCloud"
            id="workPiece4">
                <div class="work-overlay"></div>
                <div class="work-list-item-cnt">
                    <i class="fa fa-plus"></i>
                    <h4>Anan Cloud</h4>
                    <h5>Designer/Developer</h5>
                </div>
                <img src="static/img/work/work-4.jpg" alt="">
            </li>
            <li class="work-list-item"
            data-work-info
            data-event-category="work"
            data-event-action="details"
            data-event-label="workPiece5_solarSystem"
            id="workPiece5">
                <div class="work-overlay"></div>
                <div class="work-list-item-cnt">
                    <i class="fa fa-plus"></i>
                    <h4>Three.js Solar System</h4>
                    <h5>Creator</h5>
                </div>
                <img src="static/img/work/work-5.jpg" alt="">
            </li>
            <li class="work-list-item"
            data-work-info
            data-event-category="work"
            data-event-action="details"
            data-event-label="workPiece6_slideJar"
            id="workPiece6">
                <div class="work-overlay"></div>
                <div class="work-list-item-cnt">
                    <i class="fa fa-plus"></i>
                    <h4>SlideJar</h4>
                    <h5>Designer</h5>
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