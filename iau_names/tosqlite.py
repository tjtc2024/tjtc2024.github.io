import sys
import pandas as pd
import sqlite3

# SQLiteのテーブルを作成し、CSVデータをインポートする
def main(csv_name,db_name):
    df_coord = pd.read_csv(csv_name,skipinitialspace=True)
    conn = sqlite3.connect(db_name)
    df_coord.to_sql('IAU', conn, if_exists='replace', index=False)
    conn.close()


#　エントリポイント
if __name__ == '__main__':
    main(sys.argv[1], 'stars.db')