[Heroku link]: https://dashboard.heroku.com/apps/caskrabbit

[Trello link][trello]

## Minimum Viable Product
CaskRabbit is a website sprung from TaskRabbit much as Athena emerged fully grown and armored from
Zeus' skull. By the end of Week 9, this site will meet the following requirements with minimal bugs, abundant seed data and unmatched CSS styling:

- [] Host on Heroku
- [] New account creation, login, demo login
- [] Create or Request Tasks
- [] Become a tasker or compare taskers

##Design Docs

[View Wireframes](wireframes)
[React Components][components]
[API Endpoints][api-endpoints]
[DB schema][schema]
[Sample State][sample-state]

[Wireframes]: docs/wireframes
[Components]: docs/component-hierarchy.md
[sample-state]: docs/sample-state.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md


## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

### Phase 2: Notes Model, API, and components (2 days)

**Objective:** Notes can be created, read, edited and destroyed through
the API.

### Phase 3: Notebooks (2 day)

**Objective:** Notes belong to Notebooks that can be created, read, edited and destroyed through the API.

### Phase 4: Tags (1 days)

**Objective:** Notes can be tagged with multiple tags, and tags are searchable.

### Phase 5: Allow Complex Styling in Notes (1 days, W2 Th 6pm)

**objective:** Allow rich text editing of notes.

### Phase 6: - Pagination / infinite scroll for Notes Index (1 day, W2 F 6pm)

**objective:** Add infinite scroll to Notes Index

### Bonus Features (TBD)
- [ ] Google Maps API
- [ ] Changelogs for Tasks
- [ ] Favorite Tasks, Sponsored or Best Taskers, Forums?
