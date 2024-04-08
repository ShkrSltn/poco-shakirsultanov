#!/bin/bash

current_path=$(pwd)
have_weapon=false
have_key=false
cd Start_game

check_directory() {
    if [ "$PWD" = "$current_path/Start_game/.find_a_weapon" ]; then
        echo "You found a weapon! Going back with this weapon!"
        cd "$current_path/Start_game"
        have_weapon=true
    fi

    if ! $have_weapon && [ "$PWD" = "$current_path/Start_game/left/right" ]; then
        echo "You met a monster without a weapon. You died. Sending you back to the start."
        cd "$current_path/Start_game"
    elif $have_weapon && [ "$PWD" = "$current_path/Start_game/left/right" ]; then
        echo "You met a monster with a weapon. You fight the monster and You won!!"
    fi

    if [ "$PWD" = "$current_path/Start_game/right/.search_for_key" ]; then
        echo "You found a key!"
        have_key=true
    fi

    if [ "$PWD" = "$current_path/Start_game/left/straight" ] || \
       [ "$PWD" = "$current_path/Start_game/straight/straight" ] || \
       [ "$PWD" = "$current_path/Start_game/straight/left" ] || \
       [ "$PWD" = "$current_path/Start_game/straight/right" ]; then
        echo "You encounter a trap! You are injured. Sending you back to start."
        cd "$current_path/Start_game"
    fi

    if $have_weapon && ! $have_key && [ "$PWD" = "$current_path/Start_game/left/right/door" ]; then
        echo "You need a key to escape. (Try searching around)"
    fi

    if $have_weapon && $have_key && [ "$PWD" = "$current_path/Start_game/left/right/door" ]; then
        echo "You won! You have escaped the dangerous maze."
        cd "$current_path/Start_game"
    fi
}

custom_cd() {
    cd "$1"
    check_directory
}

# Здесь ваш сценарий завершается. Вы можете добавить вызовы функций или другую логику далее.

# Пример вызова функции custom_cd:
custom_cd "some_directory"
