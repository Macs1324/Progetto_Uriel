f_in_name = str( input("Insert input file name> ") )
f_out_name = str(input("Insert out file name> "))

t_class = input("Insert class to apply")

f_in = open(f_in_name, "r")
f_out = open(f_out_name, "w+")

text = f_in.read()

r = ""

for word in text.split():
    r += f"<span class={t_class}>" + word + "</span>" + " "

f_out.write(r)