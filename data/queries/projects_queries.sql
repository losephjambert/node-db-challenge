select * from projects
where projects.id = 2;

-- for a given project id, get all it's resources
select r.name
from project_resources as pr
join resources as r
where pr.project_id = 2
and r.id = pr.resource_id;

-- for a given project id, get all it's tasks
select t.description
from tasks as t
join projects as p
on p.id = t.project_id
where p.id = 2;