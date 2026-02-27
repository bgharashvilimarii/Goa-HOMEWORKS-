# function aris kodis bloki(ranodenime xazi kodi romelic ert struqturas kmnis/rkutnis) romelic gamoikeneba ragac konkretuli davalebis shesasruleblad
# am functionebs chven tviton vwert da amistvis gamoikeneba def shemdeg functionis saxeli (nebismieri saxelis darkmeva shegvidzlia)
# shemdeg ()- romelshic iwereba parametrebi amis shemdeg :  amis shemdeg iwereba functionis tani pitobid mixedvit
# xolo amis shemdeg xdeba mati gamodzaxeba function_is saxelit ()-it da ()-shi argumentebit.

# დაწერე ფუნქცია, რომელიც მიიღებს ორ რიცხვს და დააბრუნებს მათგან დიდს.
def max(x,y):
    if x > y:
        return x
    else:
        return y
 
print(max(75,333))

# დაწერე ფუნქცია, რომელიც მიიღებს სიგრძეს და სიგანეს და დააბრუნებს მართკუთხედის ფართობს.
def spr(x,y):
    return x * y
print(spr(7,9))

# დადებითია, უარყოფითი თუ ნულია
def nums(x):
    if x > 0:
        return f"{x} is positive number" 
    elif x < 0:
        return f"{x} is negative number"
    else:
        return f"{x} is zero"
print(nums(0))

# დაწერე ფუნქცია, რომელიც მიიღებს ასაკს და დააბრუნებს:

def check_nums(x):
    if x >= 18:
        return f"person is adult"
    else:
        return f"person is teen"

print(check_nums(18))
