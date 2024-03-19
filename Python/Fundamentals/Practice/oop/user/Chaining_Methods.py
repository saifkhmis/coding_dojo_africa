class user :
    def __init__(self, first_name,last_name,email,age):
        self.first_name=first_name
        self.last_name=last_name
        self.email=email
        self.age=age
        self.is_rewards_member=False
        self.gold_card_point=0
    def display_info(self):
        print(f"First name :{self.first_name}")
        print(f"last name :{self.last_name}")
        print(f"email: {self.email}")
        print(f"age:{self.age}")
        print(f"Member: {self.is_rewards_member}")
        print(f"current points:{self.gold_card_point}")
    def enroll(self):
        if self.is_rewards_member:
            print("user already a member.")
            return self
        self.is_rewards_member=True
        self.gold_card_point=200
        return self
    def spend_points(self,amount):
        if self.spend_points <amount:
           print("you dont have enough points")
           return False
        self.gold_card_point-=amount

      
saif_user=user("saif","khmis","saifkhmisess921@gmail.com",20)
saif_user.display_info()
yaya_user=user("yaya","dem","yayadem@gmail.com",25)
kouba_user=user("kouba","chorfi","coubachorfi@gmail.com",24)
saif_user.spend_points(50)
yaya_user.enroll()
saif_user.display_info()
yaya_user.display_info