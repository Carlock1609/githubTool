

# DOUBLE WHILE LOOP EXAMPLE
# while loops will only run if True. When we want to exit the loop, we will just declare game_loop = False
game_loop = True

while game_loop:
    # CODE block - variables you want to declare and stay the same or increment while INSIDE the nested while loop below.
    guesses = 0

    # This while loop will keep running until it reaches 10 guesses, or number is guessed.
    while guesses < 10:
        # CODE block - code that you want to be asked BUT also redeclare, and ask again goes here.

        # at the end of the loop block we want to increment guesses by 1
        guesses += 1

    # This code automatically runs when guesses get to 10 because at line 11 it turns to False because guesses is 10. ->
    # -> No if statements are needed because of that.
    # IF replay == anything other than 'no' then line 22 is NEVER ran because the condition is not met. ->
    # -> this means it will skip alll the way back up to line 6, and run the loop over again, setting guesses to zero, and entering back into line 11.
    print('You ran out of guesses!')
    replay = input('Play again? ').lower()
    if replay == 'no':
        print('Goodbye.')
        # setting game_loop to False will exit line 6, because while loops do not run if False.
        game_loop = False
