# Title: Customer Burger Ordering System
  
## Problem Domain Description
This repository contains the implementation of amn ordering system for the customers of a burger restaurant 

## Features

### Classes and their functionalities

### 1. **BurgerDelivery**
- Attributes :
 - 


 ```mermaid
    classDiagram
    class burgerDelivery {
        +Number totalorders$
        +Number availableBurgers$
        +String meal
        +Number price
        +orderSlots()$
    }

class customers {
        +Number totalCustomers$
        +String customerEmail
        +String name
        +order()
        +orderComplete()
    }

    customers --> burgerDelivery : places
```