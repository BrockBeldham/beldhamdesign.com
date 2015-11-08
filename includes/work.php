<section id="work" class="container">
    <div class="work">
        <h3>Here are some things I'm proud to have been a part of:</h3>
        <div class="pop">
            <div class="pop-content"></div>
        </div>
        <ul class="work-list">
        </ul>
    </div>
</section>
<script type="text/template" id="workThumbTemplate">
    <li class="work-list-item"
    data-work-info
    data-event-category="work"
    data-event-action="details"
    data-event-label="workPiece_<%= id %>"
    id="workPiece<%= index %>">
        <div class="work-overlay"></div>
        <img src="<%= thumb %>" alt="<%= title %>">
        <div class="work-list-item-cnt">
            <i class="fa fa-plus"></i>
            <h4><%= title %></h4>
            <h5><%= role %></h5>
        </div>
    </li>
</script>
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
            <% if(typeof sources != 'undefined') { %>
                <% _.each(sources, function(source) { %>
                    <p>
                        <a href="<%= source.link %>" target="_blank">
                            <%= source.label %>
                            <i class="fa fa-link"></i>
                        </a>
                    </p>
                <% }); %>
            <% } %>
        </div>
    </div>
</script>