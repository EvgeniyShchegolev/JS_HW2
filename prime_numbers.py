from time import time


def count_number_of_prime_numbers(number: int) -> list:
    list_prime_numbers = []
    i = 2

    while number > 0:
        j = 2

        while j != i:
            if i % j == 0:
                break
            j += 1
        else:
            list_prime_numbers.append(i)
            number -= 1
        i += 1

    return list_prime_numbers


if __name__ == "__main__":
    number = int(input('Введите число: '))
    time_start = time()
    count_number_of_prime_numbers(number)
    print(f"Время выполнения кода: {time() - time_start}")
