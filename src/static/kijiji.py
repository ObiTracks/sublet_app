# -*- coding: utf-8 -*-
"""
Created on Sat Feb 15 02:54:19 2020

@author: patel
"""

import requests
from bs4 import BeautifulSoup
import re
import json

data={}
data["kijiji"]=[]
page =requests.get("https://www.kijiji.ca/b-short-term-rental/city-of-toronto/sublet/k0c42l1700273")
soup=BeautifulSoup(page.content,'lxml')

offers=soup.find_all(class_="info")

for each in offers:
    
    '''print(each.find_previous_sibling().find(class_="image").find("img").get("data-src"))
    print("=================================================")
    '''
    href=each.find('a').get('href').strip()
    k=each.find(class_="price").get_text().strip()
    eachOpen=requests.get("https://www.kijiji.ca"+href)
    soupSpec=BeautifulSoup(eachOpen.content,'lxml')
    address=soupSpec.find(itemprop="address").get_text()
    '''imges=soupSpec.find_all('img')
    print(imges)'''
    while(not(address[0].isdigit() or address[0].isalpha())):
        address=address[1:]
    data["kijiji"].append({"price":k,"URL":"https://www.kijiji.ca"+href, "Location":address})


'''for i in range(2,10):
    page =requests.get("https://www.kijiji.ca/b-for-rent/city-of-toronto/sublet/page-"+str(i)+"/k0c30349001l1700273")
    soup=BeautifulSoup(page.content,'lxml')
    
    offers=soup.find_all(class_="info")
    for each in offers:
        href=each.find('a').get('href').strip()
        k=each.find(class_="price").get_text().strip()
        Specs=str(k+href)
        data["kijiji"].append({"price":k,"URL":"https://www.kijiji.ca"+href})
'''     


with open('data.txt', 'w') as outfile:
   json.dump(data, outfile) 
    
