import random

class TempSens:
    def __init__(self) -> None:
        self.hist = 20.0

    @property
    def read(self):
        self.hist = round(random.uniform(max(0.0,self.hist-1),min(100.0,self.hist+1)),1)
        return self.hist


class pHSens:
    def __init__(self) -> None:
        self.hist = 7.0
    
    @property
    def read(self):
        self.hist = round(random.uniform(max(0.0,self.hist-1),min(14.0,self.hist+1)),1)
        return self.hist


class LevelSens:
    def __init__(self) -> None:
        self.hist = 50.0
    
    @property
    def read(self):
        self.hist = round(random.uniform(max(0.0,self.hist-5),min(100.0,self.hist+5)),1)
        return self.hist

class Tank:
    def __init__(self) -> None:
        self.ph = pHSens()
        self.temp = TempSens()
        self.level = LevelSens()

    @property
    def getpH(self): return self.ph.read
    @property
    def getlevel(self): return self.level.read
    @property
    def gettemp(self): return self.temp.read

    def __str__(self) -> str:
        return f"Level : {self.getlevel}. pH : {self.getpH}. Temperature : {self.gettemp}."

class Pump:
    pass