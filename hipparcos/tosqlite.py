import pandas as pd
import sqlite3


#
#
#
def main():
    df_coord = pd.read_csv('hip_result.csv',skipinitialspace=True)
    df_name = pd.read_csv('hip_code.csv')
    df_proper_name = pd.read_csv('hip_proper_name.csv')

    conn = sqlite3.connect('hipparcos_ja.db')
    df_coord.to_sql('COORDINATES', conn, if_exists='replace', index=False)
    df_name.to_sql('BAYER_CODES',conn,if_exists='replace',index=False)
    df_proper_name.to_sql('PROPER_NAMES', conn, if_exists='replace',index=False)
    conn.close()
    


#
#
#
if __name__ == '__main__':
    main()