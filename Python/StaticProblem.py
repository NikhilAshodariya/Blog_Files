class classA:
    def __init__(self):
        pass

    def swap(self,a,b):
        temp = a
        a = b
        b = temp
        return (a, b)

    def newSwap(c, d):
        temp = c
        c = d
        d = temp
        return (c, d)


k = classA()
val1 = 2
val2 = 3
print(f"Val1 = {val1} and Val2 = {val2}")
val1,val2 = k.swap(val1,val2)
print(f"Val1 = {val1} and Val2 = {val2}")

print("")
print("=========== New Method =============")
print("")

# Reassigning
val1 = 2
val2 = 3
print(f"Val1 = {val1} and Val2 = {val2}")
val1,val2 = classA.newSwap(val1,val2)
print(f"Val1 = {val1} and Val2 = {val2}")

print("")
print("=========== Problematic Method =============")
print("")
val1 = 2
val2 = 3
print(f"Val1 = {val1} and Val2 = {val2}")
val1,val2 = k.newSwap(val1)
print(f"Val1 = {val1} and Val2 = {val2}")
