# Web

Moonrider Web App 

## Development
- The stable branch is the `main` branch, which should only be merged by any of the [project maintainers](-/project_members).
- The `develop` branch contains any developmental changes which is yet to be tested.
- Fork from `main` to a new branch. Merge to `develop`
- Once `develop` is tested and approved, push to `main`
- Make sure all pipelines are passed

### Committing
- Write a readable commit title. `Fix`, `small fixes`, `bug fixes` and other ambiguous commit messages should be avoided.
- Commit title should be an action phrase, not in past-tense. (e.g. "~~Changed border size to 1px~~" -> "Change border size to 1px")
- Commit title should not exceed 35 characters length
- Long commit titles should have commit description which can be added by add double newline. E.g.
```
This is the commit title

This is the content of the commit describing
my fixes, and other relevant things you should
know about this commit
```
- Take note of the empty newline after the title
- Commit description should not exceed 50 characters on each line, as you can see above
- Trello, Jira or any task ID can be added to the commit description
- `git log --oneline` is way easier to read, and in other git client applications
- Make a commit per change. Do not couple different changes into one commit. A commit to belong to an update, delete or creation of a code in the project. I have this content I need to modify
```
2 4 6 8 10 11 14 12
```
This should be series of even numbers, but somehow we have an odd number in the list and I am tasked with "Remove odd numbers and also re-order them properly"

#### Here is the process:
1. Modify the content to
```
2 4 6 8 10 14 12
```
2. Commit `git commit -am "Remove odd number from sequence"`
3. Perform the other task of re-ordering
```
2 4 6 8 10 12 14
```
4. Commit `git commit -am "Re-order even number sequence"`

Now, we have 2 commits with the changes, the project maintainers can revert each commit changes independent of other changes.
Do not commit `Remove odd number and re-order sequence`. It complicates git commits and changes.

Enjoy your development! :)
