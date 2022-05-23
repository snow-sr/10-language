-- Define a table that will store our tasks

task_table = {}

function startup_cold()

print("Welcome to Lua to-do tasklist!")

print("How will be the name of your to-do list?")
local name = io.read()

print(name + " is your to-do list name.")

print("What do you want to add to your to-do list?")
local task = io.read()

end



function init()

end

init()