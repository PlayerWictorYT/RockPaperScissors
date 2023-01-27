import tkinter as tk
from tkinter import messagebox
import random

def rock():
    choice = "Rock"
    play_game(choice)

def paper():
    choice = "Paper"
    play_game(choice)

def scissors():
    choice = "Scissors"
    play_game(choice)

def play_game(choice):
    computer_choice = random.choice(["Rock", "Paper", "Scissors"])
    result = ""
    if choice == computer_choice:
        result = "Tie"
    elif choice == "Rock" and computer_choice == "Scissors":
        result = "You Win!"
    elif choice == "Rock" and computer_choice == "Paper":
        result = "You Lose!"
    elif choice == "Paper" and computer_choice == "Rock":
        result = "You Win!"
    elif choice == "Paper" and computer_choice == "Scissors":
        result = "You Lose!"
    elif choice == "Scissors" and computer_choice == "Rock":
        result = "You Lose!"
    elif choice == "Scissors" and computer_choice == "Paper":
        result = "You Win!"
    messagebox.showinfo("Result", "You chose: " + choice + "\nComputer chose: " + computer_choice + "\n\nResult: " + result)

root = tk.Tk()
root.geometry("300x200")
root.title("Rock, Paper, Scissors")

label = tk.Label(root, text="Make Your Choice", font=("Arial", 14), width=20, height=2)
label.place(relx=0.5, rely=0.1, anchor=tk.CENTER)

rock_button = tk.Button(root, text="rock", font=("Arial", 12), width=10, height=2, command=rock)
rock_button.place(relx=0.5, rely=0.3, anchor=tk.CENTER)

paper_button = tk.Button(root, text="paper", font=("Arial", 12), width=10, height=2, command=paper)
paper_button.place(relx=0.5, rely=0.5, anchor=tk.CENTER)

scissors_button = tk.Button(root, text="scissors", font=("Arial", 12), width=10, height=2, command=scissors)
scissors_button.place(relx=0.5, rely=0.7, anchor=tk.CENTER)

root.mainloop()
